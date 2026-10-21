import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeApiBaseUrl, apiEndpoint } from '../src/shared/lib/api-url.js'

test('Docker uses the same origin and exactly one API prefix', () => {
  assert.equal(normalizeApiBaseUrl(), '/api')
  assert.equal(apiEndpoint('/api/', '/admin/promotions'), '/api/admin/promotions')
})

test('Render backend URLs preserve HTTPS and exactly one API prefix', () => {
  assert.equal(normalizeApiBaseUrl('https://demo-api.onrender.com/'), 'https://demo-api.onrender.com/api')
  assert.equal(apiEndpoint('https://demo-api.onrender.com/api/', 'auth/login'),
    'https://demo-api.onrender.com/api/auth/login')
})
