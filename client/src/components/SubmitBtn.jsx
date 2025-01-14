import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ formBtn }) => {
  const navigate = useNavigation()
  const isSubmitting = navigate.state === 'submitting'
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'submitting...' : 'submit'}
    </button>
  )
}
export default SubmitBtn
