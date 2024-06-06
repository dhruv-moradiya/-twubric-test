export function getFormattedDate(timeStamp) {

  const newDate = new Date(timeStamp)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const date = newDate.getDate()
  const month = months[newDate.getMonth()]
  const year = newDate.getFullYear()

  return `${month}, ${date}-${year}`
}

export function getTimeStamp(date) {
  if (!date) return null;

  const [year, month, day] = date.split('-');

  const dateObj = new Date(`${year}-${month}-${day}T00:00:00Z`);
  const timestamp = Math.floor(dateObj.getTime() / 1000);

  return timestamp;
}

export function asd(a, b) {
  console.log("first");
  return a - b;
}
export function des(a, b) {
  console.log("first");
  return b - a;
}