const myPromise = () => {
  return new Promise((resolve, reject) => {
    const isError = Math.random() < 0.2
    console.log("promise 함수 내부")
    setTimeout(() => {
      console.log("3초 후")
      if (!isError) {
        resolve("0.2 보다 크다.")
      } else {
        reject("0.2 보다 작다.")
      }
    }, 3000)
  })
}

const getRandomResult = async () => {
  const result = await myPromise()
  console.log(`결과 반환, ${result}`)
}

getRandomResult()