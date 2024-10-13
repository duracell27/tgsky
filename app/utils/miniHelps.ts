export function formatNumberWithSpaces(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function fromSecToTimeString(seconds: number, language: string): string {
  const days = Math.floor(seconds / (24 * 3600)); // Дні
  const hours = Math.floor((seconds % (24 * 3600)) / 3600); // Години
  const minutes = Math.floor((seconds % 3600) / 60); // Хвилини
  const remainingSeconds = seconds % 60; // Секунди

  if (language === "uk") {
    if (days > 0) {
      const dayString = days === 1 ? "день" : "дні";
      return `${days} ${dayString} ${hours > 0 ? `${hours} год` : ""}`.trim();
    } else if (hours > 0) {
      return `${hours} год ${minutes > 0 ? `${minutes} хв` : ""}`.trim();
    } else {
      return `${minutes > 0 ? `${minutes} хв` : ""} ${
        remainingSeconds > 0 ? `${remainingSeconds} сек` : ""
      }`.trim();
    }
  } else if (language === "en") {
    if (days > 0) {
      return `${days} d ${hours > 0 ? `${hours} h` : ""}`.trim();
    } else if (hours > 0) {
      return `${hours} h ${minutes > 0 ? `${minutes} min` : ""}`.trim();
    } else {
      return `${minutes > 0 ? `${minutes} min` : ""} ${
        remainingSeconds > 0 ? `${remainingSeconds} sec` : ""
      }`.trim();
    }
  } else {
    throw new Error("Unsupported language");
  }
}

export function formatTimeUntilNow(timestamp: Date, language: string): string {
  const targetDate = new Date(timestamp); // Перетворюємо строку на дату
  const currentTime = new Date(); // Поточний час
  let diffInSeconds = Math.floor((targetDate.getTime() - currentTime.getTime()) / 1000); // Різниця в секундах

  // Якщо час в минулому або дорівнює 0, то повертаємо "0"
  if (diffInSeconds <= 0) {
    return language === 'uk' ? '0 сек' : '0 sec';
  }

  const days = Math.floor(diffInSeconds / (24 * 3600)); // Дні
  const hours = Math.floor((diffInSeconds % (24 * 3600)) / 3600); // Години
  const minutes = Math.floor((diffInSeconds % 3600) / 60); // Хвилини
  const remainingSeconds = diffInSeconds % 60; // Секунди

  if (language === 'uk') {
    if (days > 0) {
      const dayString = days === 1 ? 'день' : 'дні';
      return `${days} ${dayString} ${hours > 0 ? `${hours} год` : ''}`.trim();
    } else if (hours > 0) {
      return `${hours} год ${minutes > 0 ? `${minutes} хв` : ''}`.trim();
    } else {
      return `${minutes > 0 ? `${minutes} хв` : ''} ${remainingSeconds > 0 ? `${remainingSeconds} сек` : ''}`.trim();
    }
  } else if (language === 'en') {
    if (days > 0) {
      return `${days} d ${hours > 0 ? `${hours} h` : ''}`.trim();
    } else if (hours > 0) {
      return `${hours} h ${minutes > 0 ? `${minutes} min` : ''}`.trim();
    } else {
      return `${minutes > 0 ? `${minutes} min` : ''} ${remainingSeconds > 0 ? `${remainingSeconds} sec` : ''}`.trim();
    }
  } else {
    throw new Error('Unsupported language');
  }
}
