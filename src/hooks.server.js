import * as Sentry from '@sentry/sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import * as auth from '$lib/server/auth';
import { paraglideMiddleware } from '$lib/paraglide/server';

Sentry.init({
    dsn: "https://f02b9c28bd4194c8ab63f78373898147@o4509691271774208.ingest.us.sentry.io/4509691274264576",
    tracesSampleRate: 1
})

const handleParaglide = ({ event, resolve }) =>
				paraglideMiddleware(event.request, ({ request, locale }) => {
								event.request = request;

								return resolve(event, {
												transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
								});
				});

const handleAuth = async ({ event, resolve }) => {
				const sessionToken = event.cookies.get(auth.sessionCookieName);

				if (!sessionToken) {
								event.locals.user = null;
								event.locals.session = null;
								return resolve(event);
				}

				const { session, user } = await auth.validateSessionToken(sessionToken);

				if (session) {
								auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
				} else {
								auth.deleteSessionTokenCookie(event);
				}

				event.locals.user = user;
				event.locals.session = session;
				return resolve(event);
};

export const handle = sequence(Sentry.sentryHandle(), sequence(handleParaglide, handleAuth));
export const handleError = Sentry.handleErrorWithSentry();