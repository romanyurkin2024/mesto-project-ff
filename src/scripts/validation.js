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

function enableValidation(formConfig) {
  const formElements = document.querySelectorAll(formConfig.formSelector);
  formElements.forEach((formElement) => {
    const buttonForm = formElement.querySelector(
      formConfig.submitButtonSelector
    );
    const inputElements = formElement.querySelectorAll(
      formConfig.inputSelector
    );

    if (formElement.id !== "delete__card") {
      disablePopupButton(buttonForm, formConfig.inactiveButtonClass);
    }

    inputElements.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}__input-error`
      );

      inputElement.addEventListener("input", function (evt) {
        if (inputElement.validity.patternMismatch) {
          inputElement.setCustomValidity(inputElement.dataset.errorMessage);
        } else {
          inputElement.setCustomValidity("");
        }

        if (!evt.target.validity.valid) {
          evt.target.classList.add(formConfig.inputErrorClass);
          showError(
            errorElement,
            evt.target.validationMessage,
            formConfig.errorClass
          );
          if (hasInvalidInput(Array.from(inputElements))) {
            disablePopupButton(buttonForm, formConfig.inactiveButtonClass);
          }
        } else {
          evt.target.classList.remove(formConfig.inputErrorClass);
          hideError(errorElement, formConfig.errorClass);
          if (!hasInvalidInput(Array.from(inputElements))) {
            enablePopupButton(buttonForm, formConfig.inactiveButtonClass);
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
