import { useState } from "react";

export default function Add(){
    
   const [formData, setFormData] = useState({
nom: '',
des: '',
date: '',
image: ''
});
const [message, setMessage] = useState('');
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};
const handleSubmit = (e) => {

e.preventDefault();
 if (!formData.nom || !formData.des || !formData.date || !formData.image) {
            
            setMessage('❌ Veuillez remplir tous les champs.');
            return;
        }
try{
   

//Recuperer les films from localhoste
const lsmovies=JSON.parse(localStorage.getItem("movies"))||[];
 const newMovie = {
                id: lsmovies.length + 1, 
                ...formData
            };
//ajouter nmovie
const lsnmovies=[...lsmovies,formData];
//sauvgarder
localStorage.setItem("movies",JSON.stringify(lsnmovies))
//Renitialisation
setFormData({ nom: '', des: '', date: '', image: '' });
setMessage('✅ Film ajouté avec succès !');
console.log('Données du formulaire :', formData);
}catch{
setMessage('❌ Une erreur est survenue lors de l\'ajout.');
            console.error('Erreur:', error);
}
};

return (
<form id="add" onSubmit={handleSubmit}>
    <h2 id="af">Ajouter un filme</h2>
<label htmlFor="nom"> Nom: </label>
<input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
<br />
<label htmlFor="des"> Description: </label>
<textarea type="text" id="des" name="des" value={formData.des} onChange={handleChange} />
<br />
<label htmlFor="date"> Date: </label>
<input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
<br />
<label htmlFor="image"> Image URL: </label>
<input type="text" id="image" name="image" value={formData.image}
onChange={handleChange} />
<br />
{message && <p style={{color:"white", marginTop: '10px' }}>{message}</p>}
<button type="submit">Envoyer</button>
</form>
);
}