// Placeholder worker to satisfy worktree expectations.
// Analytics feature was abandoned; this file intentionally left minimal.
export default {
  async fetch() {
    return new Response('Analytics worker disabled.', { status: 410 });
  }
};
