// Accept a backend root or an API URL, with or without a trailing slash.
export function normalizeApiBaseUrl(value = '/api') {
  const base = (value || '/api').replace(/\/+$/, '')
  return base.endsWith('/api') ? base : base + '/api'
}

export function apiEndpoint(base, path) {
  return normalizeApiBaseUrl(base) + '/' + path.replace(/^\/+/, '')
}
