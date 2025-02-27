function showError(errorElement, errorMessage, errorClass) {
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideError(errorElement, errorClass) {
  errorElement.classList.remove(errorClass);
}

function disablePopupButton(buttonForm, inactiveButtonClass) {
  buttonForm.classList.add(inactiveButtonClass);
  buttonForm.disabled = true;
}

function enablePopupButton(buttonForm, inactiveButtonClass) {
  buttonForm.classList.remove(inactiveButtonClass);
  buttonForm.disabled = false;
}

const hasInvalidInput = (inputElements) => {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function enableValidation(forms) {
  const formElements = document.querySelectorAll(forms.formSelector);
  formElements.forEach((formElement) => {
    const buttonForm = formElement.querySelector(forms.submitButtonSelector);
    const inputElements = formElement.querySelectorAll(forms.inputSelector);
    disablePopupButton(buttonForm, forms.inactiveButtonClass);

    inputElements.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}__input-error`
      );

      inputElement.addEventListener("input", function (evt) {
        if (!evt.target.validity.valid) {
          evt.target.classList.add(forms.inputErrorClass);
          showError(
            errorElement,
            evt.target.validationMessage,
            forms.errorClass
          );
          if (hasInvalidInput(Array.from(inputElements))) {
            disablePopupButton(buttonForm, forms.inactiveButtonClass);
          }
        } else {
          evt.target.classList.remove(forms.inputErrorClass);
          hideError(errorElement, forms.errorClass);
          if (!hasInvalidInput(Array.from(inputElements))) {
            enablePopupButton(buttonForm, forms.inactiveButtonClass);
          }
        }
      });
    });
  });
}

function clearValidation(form, validationConfig) {
  const formInputElements = form.querySelectorAll(
    validationConfig.inputSelector
  );
  form.reset();
  formInputElements.forEach((inputElement) => {
    inputElement.classList.remove(validationConfig.inputErrorClass);
    hideError(
      form.querySelector(`.${inputElement.id}__input-error`),
      validationConfig.errorClass
    );
  });
}

export { enableValidation, clearValidation };
