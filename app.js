//Storage Controller

// Item Controller
const ItemCtrl = (function (id, name, calories) {
    const Item = function (id, name, calories) {
        this.id = id,
            this.name = name,
            this.calories = calories;
    }
    const data = {
        items: [{
                id: 1,
                name: 'Rice',
                calories: 400
            },
            {
                id: 2,
                name: 'Chapati',
                calories: 200
            }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        logData: function () {
            return data;
        },
        getItems: function () {
            return data.items;
        }
    }
})();


//UI Controller
const UICtrl = (function () {

    const UISelectors = {
        itemList : '#item-list',
        addBtn : '.add-btn'
    }

    return {
        populateItems: function (items) {
            let html = '';

            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}- </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>`
            });

         document.querySelector(UISelectors.itemList).innerHTML = html;
            
        },
        getUISelectors : function() {
            return UISelectors;
        }
    }

})();

// App Controller
const AppCtrl = (function () {

    const loadEventListeners = function() {
        const UISelectors = UICtrl.getUISelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', addItemInList);

        
    }

    return {
        init: function () {
            console.log('Initializing....');
            const items = ItemCtrl.getItems();
            UICtrl.populateItems(items);
        }
    }

})();

AppCtrl.init();