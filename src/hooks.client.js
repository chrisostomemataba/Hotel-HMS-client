import { handleErrorWithSentry, replayIntegration } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://f02b9c28bd4194c8ab63f78373898147@o4509691271774208.ingest.us.sentry.io/4509691274264576',

  tracesSampleRate: 1.0,


});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
