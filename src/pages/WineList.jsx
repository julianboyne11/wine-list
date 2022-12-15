import * as wines from "../data/data"
import Wine from "../components/Wine";

const WineList = () => {
  return ( 
    <>
      <h2>Vini a Bottiglia - Wine by the Bottle</h2>
      <br />
      <h2>Bollicine - Sparkling Italy</h2>
      {wines.sparklingItaly.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Champagne - France</h2>
      {wines.champagneFrance.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Rose</h2>
      {wines.rose.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Vini Bianchi Italiani - Italian White Wines</h2>
      <br />
      <h2>Pinot Grigio</h2>
      {wines.pinotGrigio.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Piedmont</h2>
      {wines.whitePiedmont.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Sardinia</h2>
      {wines.whiteSardinia.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Campania</h2>
      {wines.whiteCampania.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Friulli</h2>
      {wines.whiteFriulli.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Sicily</h2>
      {wines.whiteSicily.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Trentino-Alto Adige - Sud Tirol</h2>
      {wines.whiteTrentino.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Tuscany</h2>
      {wines.whiteTuscany.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Umbria</h2>
      {wines.whiteUmbria.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Veneto</h2>
      {wines.whiteVeneto.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>California</h2>
      {wines.whiteCalifornia.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Vini Rossi Italini - Italian Red Wines</h2>
      <br />
      <h2>Apulia</h2>
      {wines.redApulia.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Piedmont</h2>
      {wines.redPiedmont.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Barolo</h2>
      {wines.barolo.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Sardinia</h2>
      {wines.redSardinia.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Sicily</h2>
      {wines.redSicily.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Tuscany</h2>
      {wines.redTuscany.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Trentino-Alto Adige</h2>
      {wines.redTrentinoAltoAdige.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Veneto</h2>
      {wines.redVeneto.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Vinni Rossi Mondo - Red Wines World</h2>
      <h2>Selection</h2>
      <br />
      <h2>Spain</h2>
      {wines.redSpain.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>USA - California</h2>
      {wines.redUsa.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Argentina</h2>
      {wines.redArg.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Chile</h2>
      {wines.redChile.map(wine => <Wine wine={wine}/>)}
      <br />
    </>
  );
}

export default WineList;