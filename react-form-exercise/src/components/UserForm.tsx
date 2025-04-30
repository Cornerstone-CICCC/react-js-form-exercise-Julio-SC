import { useState, ChangeEvent } from "react"
import Welcome from "../components/Welcome"

const foodOptions = ["Chicken", "Beef", "Vegetables", "Dessert", "Pork"]

const UserForm = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState("")
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([])
  const [showGreeting, setShowGreeting] = useState(false)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      setFavoriteFoods(prev => [...prev, value])
    } else {
      setFavoriteFoods(prev => prev.filter(food => food !== value))
    }
  }

  const handleClear = () => {
    setFirstname("")
    setLastname("")
    setAge("")
    setFavoriteFoods([])
    setShowGreeting(false)
  }

  const handleDisplayUser = () => {
    setShowGreeting(true)
  }

  return (
    <div>
      <h2>User Form</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <fieldset>
          <legend>Favorite Foods:</legend>
          {foodOptions.map((food) => (
            <label key={food}>
              <input
                type="checkbox"
                value={food}
                checked={favoriteFoods.includes(food)}
                onChange={handleCheckboxChange}
              />
              {food}
            </label>
          ))}
        </fieldset>
      </form>

      <button type="button" onClick={handleDisplayUser}>Display User</button>
      <button type="button" onClick={handleClear}>Clear</button>

      {showGreeting && (
        <div>
          <Welcome fullname={`${firstname} ${lastname}`} />
          <p>You are {age} years old and your favorite foods are: {favoriteFoods.join(", ")}.</p>
        </div>
      )}
    </div>
  )
}

export default UserForm
