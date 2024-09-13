// plugins/vercel-analytics.client.ts
import { inject as injectAnalytics } from '@vercel/analytics';

export default defineNuxtPlugin(() => {
  // Inject Vercel Analytics
  injectAnalytics();
});
