import Button from '../../shared/buttons'
import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {
  const navigate = useNavigate()

  const submit = () => {
    let storedValues = Object.assign({}, values)
    storedValues.amount = parseFloat(storedValues.amount)
    storedValues.id = crypto.randomUUID()
    props.onItemSubmit(storedValues)
    navigate(-1)
  }

  const initialState = {
    type: "",
    repeat: "",
    weight: "",
    set: "",
    date: "",
    time: ""
  }
  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)
  
  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Liike</label>
              <select name='type' onChange={handleChange} value={values.type}>
                <option>Maastaveto</option>
                <option>Penkkipunnerrus</option>
                <option>Ylätalja</option>
                <option>Reiden ojennus</option>
              </select>
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='repeat'>Toistot</label>
              <input type='text' name='repeat' onChange={handleChange} value={values.repeat}/>
            </div>
            <div>
              <label htmlFor='weight'>Painot</label>
              <input type='text' name='weight' onChange={handleChange} value={values.weight} />
            </div>
          </div>
          <div className={styles.itemform_row}>
          <div>
              <label htmlFor='set'>Sarjat</label>
              <input type='text' name='set' onChange={handleChange} value={values.set}/>
            </div>
          </div>
          <div className={styles.itemform_row}>
          <div>
              <label htmlFor='date'>Päivämäärä</label>
              <input type='date' name='date' onChange={handleChange} value={values.date} />
            </div>
            <div>
              <label htmlFor='time'>Aloitusaika</label>
              <input type='text' name='time' onChange={handleChange} value={values.time} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button primary type='submit'>LISÄÄ</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )

}

export default ItemForm
