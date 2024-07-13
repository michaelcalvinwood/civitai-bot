

console.log('the path', window.location.pathname);


const deleteThem = () => {
  const mrs = document.querySelectorAll('.mantine-Tabs-root.mantine-1arnq9x');

  console.log('num mrs', mrs.length);

}

setInterval(deleteThem, 10000);