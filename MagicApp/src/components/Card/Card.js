const cardImage = require('../../data/images/cardImages/img_card.jpg')

function Card() {
  return (
    <div className="App">
        <div id='header'>
        </div>
        <div id='imgage'>

        </div>
        <div style={{height: '435px',
            width: '315px',
            border: '15px solid black',
            margin: 'auto',
            padding: '15px',
            background: '#765c4c',
            position:'absolute',
            top:'calc(50% - 248px)',
            left:'calc(50% - 173px'}}>
            <div>Artefato</div>
            <div>
                <img style={{width:'100%', height:'250px'}} src={cardImage}/>
            </div>
            <div style={{height: '140px', border:'1px solid gray', padding:10, background:'#d8ccc0'}}>
                Descrição da carta
            </div>
            <div>Artista</div>
        </div>
    </div>
  );
}

export default Card;
