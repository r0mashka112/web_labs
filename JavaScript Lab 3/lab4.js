function pluralizeRecords(n) {
  if (n >= 5 && n <= 20 || n % 10 === 0 || n % 10 >= 5) {
    return `В результате выполнения запроса было найдено ${n} записей`;
  }
  else if (n % 10 === 1) {
    return `В результате выполнения запроса была найдена ${n} запись`;
  } 
  else if ([2, 3, 4].includes(n % 10)) {
    return `В результате выполнения запроса было найдено ${n} записи`;
  }
}

console.log(pluralizeRecords(5));