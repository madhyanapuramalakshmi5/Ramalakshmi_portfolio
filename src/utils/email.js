import emailjs from 'emailjs-com'

const SERVICE_ID = 'service_placeholder'
const TEMPLATE_ID = 'template_placeholder'
const PUBLIC_KEY = 'public_key_placeholder'

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY)
}

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: 'ramalakshmi@example.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: formData.subject,
    })
    return result
  } catch (error) {
    console.error('Email send failed:', error)
    throw error
  }
}

export const downloadResume = () => {
  // Create a link to resume PDF
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Ramalakshmi_Madyahnapu_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
