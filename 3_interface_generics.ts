interface customInterface<T1, T2> {
    property: T1;
    moreProperty: T2;
}

const obj : customInterface<string, number> = {
    property: "10",
    moreProperty: 20
}

console.log(obj);
