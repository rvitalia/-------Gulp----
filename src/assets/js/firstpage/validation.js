import Inputmask from "inputmask";
import JustValidate from "just-validate";


export function validation() {
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99'); // Исправлена ошибка: нужно создавать экземпляр Inputmask
  inputMask.mask(telSelector);

  let parentDiv = form.closest('.modalcallback');
  const close = parentDiv.querySelector('[data-close]');
  const buttonSent = parentDiv.querySelector('.modalcallback__inner__form__button');
  buttonSent.addEventListener('click', (event => {
    console.log(event);
  }))
  const validation = new JustValidate('.form');

  validation
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      }
    ])
    .addField('.input-surname', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите фамилию!'
      }
    ])
    .addField('.input-email', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Email обязателен',
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email',
      },
    ])
    .addField('.input-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {
      //блокирумме кнопку на 5 секунд
      buttonSent.disabled = true;
      buttonSent.classList.add('disabled');

      console.log('Validation passes and form submitted', event);
      let formData = new FormData(event.target);

      // console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // console.log('Отправлено');
            close.click();
            alert('Форма успешно отправлена. Благодарим за выбор нашей компании.');
            buttonSent.disabled = false;
            buttonSent.classList.remove('disabled');
            location.reload();
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });
}
//как перезагрузить страницу