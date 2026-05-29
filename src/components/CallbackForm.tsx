import { useState, type FormEvent } from 'react'
import { SERVICE_OPTIONS } from '../data/content'
import {
  emptyCallbackForm,
  type CallbackFormData,
} from '../types/forms'
import './CallbackForm.css'

interface CallbackFormProps {
  id?: string
  compact?: boolean
}

export function CallbackForm({ id = 'callback-form', compact = false }: CallbackFormProps) {
  const [form, setForm] = useState<CallbackFormData>(emptyCallbackForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof CallbackFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, '').slice(-10))) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    if (!form.city.trim()) {
      setError('Please enter your city/location.')
      return
    }
    if (!form.service) {
      setError('Please select a service.')
      return
    }

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    }
    console.info('Callback request:', payload)
    setSubmitted(true)
    setForm(emptyCallbackForm())
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <div className={`callback-form callback-form--success ${compact ? 'callback-form--compact' : ''}`}>
        <p className="callback-form__success-title">Thank you!</p>
        <p>Our CA team will contact you within 2 hours.</p>
      </div>
    )
  }

  return (
    <form
      id={id}
      className={`callback-form ${compact ? 'callback-form--compact' : ''}`}
      onSubmit={handleSubmit}
    >
      <h3 className="callback-form__title">Request Callback</h3>
      <p className="callback-form__note">Strictly confidential. No spam.</p>

      {error && <p className="callback-form__error" role="alert">{error}</p>}

      <label>
        <span>*Your Name</span>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          required
        />
      </label>

      <label>
        <span>Mobile Number</span>
        <input
          type="tel"
          value={form.mobile}
          onChange={(e) => update('mobile', e.target.value)}
          placeholder="10-digit mobile"
          required
        />
      </label>

      <label>
        <span>City/Location</span>
        <input
          type="text"
          value={form.city}
          onChange={(e) => update('city', e.target.value)}
          required
        />
      </label>

      <label>
        <span>Service Required</span>
        <select
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          required
        >
          <option value="">Select an Option</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Message (Optional)</span>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </label>

      <fieldset className="callback-form__datetime">
        <legend>Date and time</legend>
        <div className="callback-form__datetime-row">
          <label>
            <span>Day</span>
            <input
              type="number"
              min={1}
              max={31}
              placeholder="DD"
              value={form.day}
              onChange={(e) => update('day', e.target.value)}
            />
          </label>
          <label>
            <span>Month</span>
            <input
              type="number"
              min={1}
              max={12}
              placeholder="MM"
              value={form.month}
              onChange={(e) => update('month', e.target.value)}
            />
          </label>
          <label>
            <span>Year</span>
            <input
              type="number"
              min={2024}
              max={2030}
              placeholder="YYYY"
              value={form.year}
              onChange={(e) => update('year', e.target.value)}
            />
          </label>
        </div>
        <div className="callback-form__datetime-row">
          <label>
            <span>Hours</span>
            <input
              type="number"
              min={1}
              max={12}
              value={form.hour}
              onChange={(e) => update('hour', e.target.value)}
            />
          </label>
          <label>
            <span>Minutes</span>
            <input
              type="number"
              min={0}
              max={59}
              value={form.minute}
              onChange={(e) => update('minute', e.target.value)}
            />
          </label>
          <label>
            <span>AM/PM</span>
            <select
              value={form.ampm}
              onChange={(e) => update('ampm', e.target.value as 'AM' | 'PM')}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </label>
        </div>
      </fieldset>

      <button type="submit" className="btn btn--primary btn--block">
        Submit
      </button>
      <p className="callback-form__privacy">
        <em>We respect your privacy. By submitting, you agree to our terms.</em>
      </p>
    </form>
  )
}
