import Button from '../../shared/buttons'
import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {
  const navigate = useNavigate()

  const submit = () => {
    let storedValues = Object.assign({}, values)
    storedValues.amount = parseFloat(storedValues.amount)
    storedValues.id = storedValues.id ? storedValues.id : crypto.randomUUID()
    props.onItemSubmit(storedValues)
    navigate(-1)
  }

  const initialState = props.formData ? props.formData : {
    type: "",
    repeat: 0,
    weight: 0,
    set: 0,
    date: "",
    time: ""
  }

  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)
  
  const handleCancel = () => {
    navigate('/')
  }

  const handleDelete = () => {
    props.onItemDelete(values.id)
    navigate(-1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Liike</label>
            <select id='type' name='type' onChange={handleChange} value={values.type}>
                <option value="">(valitse)</option>
                { props.typelist.map(
                  type => <option key={type}>{type}</option>
                )}
              </select>
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='repeat'>Toistot</label>
              <input id='repeat' type='number' name='repeat' onChange={handleChange} value={values.repeat}/>
            </div>
            <div>
              <label htmlFor='weight'>Painot</label>
              <input id='weight' type='number' name='weight' onChange={handleChange} value={values.weight} />
            </div>
          </div>
          <div className={styles.itemform_row}>
          <div>
              <label htmlFor='set'>Sarjat</label>
              <input id='set' type='number' name='set' onChange={handleChange} value={values.set}/>
            </div>
          </div>
          <div className={styles.itemform_row}>
          <div>
              <label htmlFor='date'>Päivämäärä</label>
              <input id='date' type='date' name='date' onChange={handleChange} value={values.date} />
            </div>
            <div>
              <label htmlFor='time'>Aloitusaika</label>
              <input id='time' type='text' name='time' onChange={handleChange} value={values.time} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>
            <div>
            <Button primary
                      disabled={values.type &&
                                values.set &&
                                values.date &&
                                values.repeat&&
                                values.weight ? "" : "true"}
                      type='submit'>
                { props.formData ? "TALLENNA" : "LISÄÄ" }
              </Button>
            </div>
          </div>
          { props.onItemDelete ? 
            <div className={styles.itemform_row}>
              <div>
                <Button secondary onClick={handleDelete}>POISTA</Button>
              </div>
              <div></div>
            </div>
            : null }
        </div>
      </form>
    </div>
  )

}

export default ItemForm
