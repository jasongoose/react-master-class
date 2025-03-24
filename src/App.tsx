import style from "./App.module.css"

function App() {
  return (
      <main>
        <fieldset>
          <legend>
            <h1>내가 가고 싶은 나라들</h1>
          </legend>
          <form className={style['form-layout']}>
            <input type="text" placeholder="이름"/>
            <button>가자!</button>
          </form>
        </fieldset>
        <fieldset>
          <legend>
            <h1>내가 가본 나라들</h1>
          </legend>
          <ul>
            <li></li>
          </ul>
        </fieldset>
        <fieldset>
          <legend><h1>내가 좋아하는 나라들</h1></legend>
          <ul>
            <li></li>
          </ul>
        </fieldset>
      </main>
  )
}

export default App