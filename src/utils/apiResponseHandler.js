export function checkResponce(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Упссс... Произошла ошибка: ${res.status}`);
}