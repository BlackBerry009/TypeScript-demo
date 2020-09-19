export function classDescriptor(desc: string) {
  return function (target: new () => object) {
    target.prototype.$classDescription = desc;
  }
}

export function propDescriptor(desc: string) {
  return function (target: any, propName: string) {
    if (!target.$propDescriptions) {
      target.$propDescriptions = []
    }
    target.$propDescriptions.push({ propName, desc })
  }
}


export function printObj(obj: any) {
  obj.$classDescription ? console.log(obj.$classDescription) : console.log(obj.__proto__.construtor.name)
  if (obj.$propDescriptions) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const prop = obj.$propDescriptions.find((it: any) => it.propName === key)
        if (prop) {
          console.log(`\t${prop.desc}:${obj[key]}`)
        } else {
          console.log(`\t${key}:${obj[key]}`)
        }

      }
    }
  } else {
    obj.$propDescriptions = []
  }
}
