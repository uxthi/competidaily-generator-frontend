export default function NewCompetidailyRoute() {
    return (
      <div>
        <p>Sugira um novo tema!</p>
        <form method="post">
          <div>
            <label>
              Seu nome: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Um tema bem legal*: <textarea name="content" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }