export interface Person {
	readonly id: string;
	firstname: string;
	secondname: string;
	thirdname: string;
	fourthname: string;
	fifthname: string;
	lastname: string;
}

/*

ID
   * UUID
   * Kennung

Geburt:
   * Geburtsort
   * Geburtsdatum

Kontakt
   * Telefonnummer +
   * E-Mail-Adresse +
   * Wohnort +

Spirituelle Betreuung:
   * Vater +

Taufe
   * Datum
   * Ort, Kirche
   * Taufname
   * Spender (Täufer)
   * Pate
   * Zeuge
   * ...

Myronsalbung
   * Datum
   * Ort, Kirche
   * Spender

Erstkommunion ?
   * Datum
   * Ort, Kirche
   * Spender

Trauung +
   * Datum
   * Ort, Kirche
   * Partner
   * Spender
   * Zeugen


Scheidung +
   * Datum
   * Ort, Kirche
   * Partner
   * Spender
   * Zeugen


Weihen +
   * Datum
   * Ort, Kirche
   * Weihename
   * Spender
   * Rang
   * Zeugen?


Krankensalbung
   * Datum
   * Ort, Kirche
   * Spender


Tod
   * Datum
   * Ort
   * Trauerfeierdatum
   * Ort, Kirche der Trauerfeier
   * Väter
   * Begräbnisort


Familie:
   * ID von Vater, Mutter
   * ID von Ehepartner
   * ID von Kinder
*/
