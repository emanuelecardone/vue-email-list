Vue.config.devtools = true;

const app = new Vue(
    {

        el: '#root',

        data: {

            emailsAmount: 10,
            emailsList: []

        },

        methods: {


        },

        created: function(){

            // Funzione che genera per emailsAmount volte un'e-mail random e la pusha nell'array emailsList
            for(let i = 0; i < this.emailsAmount; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const serverEmail = response.data.response;
                    this.emailsList.push(serverEmail);
                });
            }
                
        }

    }
);