class Row {
    constructor(a, b, c, d, e, f, g) {
        this.title = a;
        this.name = b;
        this.surname = c;
        this.gender = d;
        this.region = e;
        this.age = f;
        this.date_of_birth = g;
    }
    create() {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${this.title} | ${this.name} | ${this.surname} | ${this.gender} | ${this.region} | ${this.age} | ${this.date_of_birth}`;
        return listItem;
    }
}

const retrieveNames = async (a) => {
    const res = await fetch(`http://uinames.com/api/?amount=${a}&ext`);
    const json = await res.json();
    for (i in json) {
        const row = new Row(
            json[i].title,
            json[i].name,
            json[i].surname,
            json[i].gender,
            json[i].region,
            json[i].age,
            json[i].birthday.mdy
        ).create();
        document.querySelector('ul.list-group').appendChild(row);
    }
}

function validate() {
    var inputCount = document.querySelector('input#nameCountInput');
    var list = document.querySelector('ul.list-group');
    if (inputCount.value > 500) {
        return alert('The number of names to return cannot exceed 500!');
    } else {
        if (list.children.length > 0) {
            list.innerHTML = '';
        }
        return retrieveNames(inputCount.value);
    }
}