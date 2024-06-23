const mutulaFund = document.getElementById('mF');
const searchBar = document.getElementById('searchBar');
let mfList = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const fundList = mfList.filter((ele) => {
        return (
            ele.schemeName.toLowerCase().includes(searchString)
        );
    });
    displayFund(fundList);
});

async function fetchData(){
    try {
        const res = await fetch('https://api.mfapi.in/mf');
        mfList = await res.json();
        displayFund(mfList);
    } catch (err) {
        console.error(err);
    }
}

const displayFund = (element) => {
    const htmlString = element
        .map((ele) => {
            return `
            <li class="list_item">
                <h2>${ele.schemeName}</h2>
            </li>
            `;
        })
        .join('');
    mutulaFund.innerHTML = htmlString;
};

fetchData();
