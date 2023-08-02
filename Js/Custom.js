/*
***************************************************************
hide/show notification card
***************************************************************
*/
function notification() {
    let a = document.getElementById("notificationCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }
}
/*
***************************************************************
hide/show NavBar on mobile
***************************************************************
*/

function mobileNavBar() {
    let a = document.getElementById("mobileNavBarCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }
}
/*
***************************************************************
hide/show profile card
***************************************************************
*/

function profile() {
    let a = document.getElementById("profileCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}

/*
***************************************************************
hide/show SearchBar
***************************************************************
*/

function searchbar() {
    let a = document.getElementById("searchbarCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}

/*
***************************************************************
hide/show popup Guide Setup
***************************************************************
*/

function guideBtn() {
    let a = document.getElementById("guidePopupCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}

/*
***************************************************************
hide/show Manage Dropdown on Add product page
***************************************************************
*/

function manage() {
    let a = document.getElementById("manageCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}

/*
***************************************************************
hide/show Vender Dropdown on Add product page
***************************************************************
*/

function vendorOption() {
    let a = document.getElementById("vendorOptionCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}

/*
***************************************************************
hide/show Collection Dropdown on Add product page
***************************************************************
*/

function collectionOption() {
    let a = document.getElementById("collectionOptionCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide/show Sort Dropdown on Add product page
***************************************************************
*/

function sortBtn() {
    let a = document.getElementById("sortBtnCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide/show Collection Dropdown on Add product page
***************************************************************
*/

function productCat() {
    let a = document.getElementById("productCatCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide/show Search Engine Listing Div on Add product page
***************************************************************
*/

function searchEngine() {
    let a = document.getElementById("searchEngineCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide/show variant Div on Add product page
***************************************************************
*/

function variants() {
    let a = document.getElementById("variantsCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide/show variant Div on Add product page
***************************************************************
*/

function addVarient() {
    let a = document.getElementById("addVarientCard");
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }

}
/*
***************************************************************
hide divs when click outside
***************************************************************
*/
document.addEventListener('mouseup', function(e) {
    let notificationCard = document.getElementById('notificationCard');
    if (!notificationCard.contains(e.target)) {
        notificationCard.style.display = 'none';
    }


    let profileCard = document.getElementById('profileCard');
    if (!profileCard.contains(e.target)) {
        profileCard.style.display = 'none';
    }


    let searchbarCard = document.getElementById('searchbarCard');
    if (!searchbarCard.contains(e.target)) {
        searchbarCard.style.display = 'none';
    }
});

/*
***************************************************************
Close NotificationBar on click of close button on home page
***************************************************************
*/
function removeNotificationBar() {
    document.getElementById('notificationBar').style.display = "none";
}

/*
***************************************************************
Toggle Setup guide on home page
***************************************************************
*/
function openSetupGuide() {
    let m = document.getElementById("openSetupGuide");
    if (m.style.display === "block") {
        document.getElementById("setupGuideBtn").innerHTML = '<i class="fa fa-angle-down"></i>';
        m.style.display = "none";
    } else {
        m.style.display = "block";
        document.getElementById("setupGuideBtn").innerHTML = '<i class="fa fa-angle-up"></i>';
    }
}
/*
***************************************************************
Toggle Store Information On setting popup Page
***************************************************************
*/
function editPersonalDetail(element) {
    // let personalDetailCard = element.parentElement.parentElement.lastElementChild;
    let personalDetailCard = document.getElementById("editPersonalDetailCard");

    element.innerText === "Edit" ? element.innerText = "Close" : element.innerText = "Edit";
    personalDetailCard.style.display === "block" ? personalDetailCard.style.display = "none" : personalDetailCard.style.display = "block";
}


function editBillingDetail(element) {
    // let personalDetailCard = element.parentElement.parentElement.lastElementChild;
    let billingDetailCard = document.getElementById("editBillingDetailCard");

    element.innerText === "Edit" ? element.innerText = "Close" : element.innerText = "Edit";
    billingDetailCard.style.display === "block" ? billingDetailCard.style.display = "none" : billingDetailCard.style.display = "block";
}


function editCurrencyDetail(element) {
    // let personalDetailCard = element.parentElement.parentElement.lastElementChild;
    let currencyDetailCard = document.getElementById("editCurrencyDetailCard");

    element.innerText === "Change formatting" ? element.innerText = "Close formatting" : element.innerText = "Change formatting";
    currencyDetailCard.style.display === "block" ? currencyDetailCard.style.display = "none" : currencyDetailCard.style.display = "block";
}



/*
***************************************************************
Add App popup model
***************************************************************
*/
// Get the modal
let addAppModal = document.getElementById("addAppsModel");

// Get the button that opens the modal
let addAppBtn = document.getElementById("addApps");

// Get the <span> element that closes the modal
let addAppSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
addAppBtn.onclick = function () {
    addAppModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
addAppSpan.onclick = function () {
    addAppModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == addAppModal) {
        addAppModal.style.display = "none";
    }
}




/*
***************************************************************
Add Manage Tags popup model on Add Product Page
***************************************************************
*/
let manageTagModal = document.getElementById("manageTagsModal");

// Get the button that opens the modal
let manageTagBtn = document.getElementById("manageTags");

// Get the <span> element that closes the modal
let manageTagSpan = document.getElementsByClassName("close-two")[0];

// When the user clicks the button, open the modal
manageTagBtn.onclick = function () {
    manageTagModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
manageTagSpan.onclick = function () {
    manageTagModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == manageTagModal) {
        manageTagModal.style.display = "none";
    }
}


/*
***************************************************************
Add Manage Tags popup model on Add Product Page
***************************************************************
*/
let addUrlModal = document.getElementById("addUrlModal");

// Get the button that opens the modal
let addUrlBtn = document.getElementById("addUrl");

// Get the <span> element that closes the modal
let addUrlSpan = document.getElementsByClassName("close-three")[0];

// When the user clicks the button, open the modal
addUrlBtn.onclick = function () {
    addUrlModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
addUrlSpan.onclick = function () {
    addUrlModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == addUrlModal) {
        addUrlModal.style.display = "none";
    }
}






