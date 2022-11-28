export async function getPackageLocation() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ latitude: 10, longitude: 20 });
    }, 1500);
  });
}
