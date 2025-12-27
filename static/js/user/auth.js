// Expose a single global object
window.auth = {
  user: null,
  session: null,
  initialized: false
};

// Initialize auth state ONCE
async function initAuth() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error('Auth init error:', error);
    window.auth.initialized = true;
    return;
  }

  window.auth.session = data.session || null;
  window.auth.user = data.session?.user || null;
  window.auth.initialized = true;
}

// Keep auth state in sync
supabaseClient.auth.onAuthStateChange((_event, session) => {
  window.auth.session = session;
  window.auth.user = session?.user || null;
});

// Helper: always returns current user
async function getCurrentUser() {
  if (window.auth.initialized) {
    return window.auth.user;
  }

  const { data } = await supabaseClient.auth.getSession();
  return data.session?.user || null;
}

// Soft guard
async function requireAuth(redirectTo = '/login/') {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

// Logout
async function logout() {
  await supabaseClient.auth.signOut();
  window.location.reload();
}

// Expose helpers
window.getCurrentUser = getCurrentUser;
window.requireAuth = requireAuth;
window.logout = logout;

// ✅ SAFE BOOT
document.addEventListener('DOMContentLoaded', () => {
  initAuth().catch(console.error);
});
