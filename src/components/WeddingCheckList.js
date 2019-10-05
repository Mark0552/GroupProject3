import React from "react";
import './WeddingCheckList.css'
import axios from 'axios'

class WeddingCheckList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      check8: false,
      check9: false,
      check10: false,
      check11: false,
      check12: false,
      check13: false,
      check14: false,
      check15: false,
      check16: false,
      check17: false,
      check18: false,
      check19: false,
      check20: false,
      check21: false,
      check22: false,
      check23: false,
      check24: false,
      check25: false,
      check26: false,
      check27: false,
      check28: false,
      check29: false,
      check30: false,
      check31: false,
      check32: false,
      check33: false,
      check34: false,
      check35: false
    }
    this.onCheckChange= this.onCheckChange.bind(this)
  }


 onCheckChange(e){
   console.log(e.target.checked)
   this.setState({
     [e.target.name]: e.target.checked
   })
 }
  render() {
    return (
      <div>
        <h1>12+ MONTHS</h1>
        <h3>No worries, you got this!</h3>
        <input type="checkbox" name="check1" checked={this.state.check1} onChange={this.onCheckChange} /> Talk budget and decide. <br />
        <input type="checkbox" name="check2" checked={this.state.check2} onChange={this.onCheckChange} /> Discover your wedding style. <br />
        <input type="checkbox" name="check3" checked={this.state.check3} onChange={this.onCheckChange} /> Choose wedding party: Maid of Honor and Bridesmaids, Best Man and Groomsmen, Flower Girl and Ring Bearer. <br />
        <input type="checkbox" name="check4" checked={this.state.check4} onChange={this.onCheckChange} /> Get engagement ring insured and consider purchasing wedding insurance. <br />
        <input  type="checkbox" name="check5" checked={this.state.check5} onChange={this.onCheckChange} /> Explore ceremony and reception venue options. <br />

        {/*10-11 months  */}

        <h1>10-11 MONTHS</h1>
        <h3>You're on a roll ...</h3>
        <input type="checkbox" name="check6" checked={this.state.check6} onChange={this.onCheckChange} /> Choose bridal party attire and accessories. <br />
        <input type="checkbox" name="check7" checked={this.state.check7} onChange={this.onCheckChange} /> Reserve ceremony and reception venues. <br />
        <input type="checkbox" name="check8" checked={this.state.check8} onChange={this.onCheckChange} /> Hire photographer, videographer, caterer, DJ/band, florist, and planner. <br />
        <input type="checkbox" name="check9" checked={this.state.check9} onChange={this.onCheckChange} /> Mail your Save the Dates. <br />
        <input type="checkbox" name="check10" checked={this.state.check10} onChange={this.onCheckChange} /> Purchase wedding dress, veil and undergarments. <br />

        {/*8-9 months  */}

        <h1>8-9 MONTHS</h1>
        <h3>Get your colors on!</h3>
        <input type="checkbox" name="check6" checked={this.state.check6} onChange={this.onCheckChange} /> Find 3 hotels (at different price points) for out-of-town guests.
				<br />
        <input type="checkbox" name="check7" checked={this.state.check7} onChange={this.onCheckChange} /> Refine guest list. <br />
        <input type="checkbox" name="check8" checked={this.state.check8} onChange={this.onCheckChange} /> Create gift registries at 3 national retailers. <br />
        <input type="checkbox" name="check9" checked={this.state.check9} onChange={this.onCheckChange} /> Begin planning honeymoon. <br />
        <input type="checkbox" name="check10" checked={this.state.check10} onChange={this.onCheckChange} /> Browse Wedding Invitation designs and coordinating stationery. <br />

        {/*6-7 months  */}

        <h1>6-7 MONTHS</h1>
        <h3>Good job! What's next?</h3>
        <input type="checkbox" name="check11" checked={this.state.check11} onChange={this.onCheckChange} /> Explore wedding day hair and makeup styles.<br />
        <input type="checkbox" name="check12" checked={this.state.check12} onChange={this.onCheckChange} /> Meet with officiant to discuss plans for ceremony. <br />
        <input type="checkbox" name="check13" checked={this.state.check13} onChange={this.onCheckChange} /> Reserve rentals: chairs, linens, lighting, décor, etc. <br />
        <input type="checkbox" name="check14" checked={this.state.check14} onChange={this.onCheckChange} /> Choose cake style and schedule tastings. <br />
        <input type="checkbox" name="check15" checked={this.state.check15} onChange={this.onCheckChange} /> Book transportation to and from venues. <br />

        {/*4-5 months  */}

        <h1>4-5 MONTHS</h1>
        <h3>The finishing touches...</h3>
        <input type="checkbox" name="check16" checked={this.state.check16} onChange={this.onCheckChange} /> Choose flowers for: 
								wedding party, attendants, venues, cake, etc.<br />
        <input type="checkbox" name="check17" checked={this.state.check17} onChange={this.onCheckChange} /> Schedule dress fittings. <br />
        <input type="checkbox" name="check18" checked={this.state.check18} onChange={this.onCheckChange} /> Book honeymoon flights and hotels. <br />
        <input type="checkbox" name="check19" checked={this.state.check19} onChange={this.onCheckChange} /> Finalize wedding guest list. <br />
        <input type="checkbox" name="check20" checked={this.state.check20} onChange={this.onCheckChange} /> Order wedding cake. <br />

        {/*3 months  */}

        <h1>3 MONTHS</h1>
        <h3>You're getting close!</h3>
        <input type="checkbox" name="check21" checked={this.state.check21} onChange={this.onCheckChange} /> Finalize honeymoon plans and ensure all documents are in order.<br />
        <input type="checkbox" name="check22" checked={this.state.check22} onChange={this.onCheckChange} /> Plan ceremony and reception seating.<br />
        <input type="checkbox" name="check23" checked={this.state.check23} onChange={this.onCheckChange} /> Experiment with hair and veil with stylist. <br />
        <input type="checkbox" name="check24" checked={this.state.check24} onChange={this.onCheckChange} /> Purchase: toasting flutes, serving pieces, guestbook, flower basket and ring bearer pillow. <br />
        <input type="checkbox" name="check25" checked={this.state.check25} onChange={this.onCheckChange} /> Finalize reception menu. <br />

        {/*2 months  */}

        <h1>2 MONTHS</h1>
        <h3>Crunch Time</h3>
        <input type="checkbox" name="check26" checked={this.state.check26} onChange={this.onCheckChange} /> Mail Wedding Invitations.<br />
        <input type="checkbox" name="check27" checked={this.state.check27} onChange={this.onCheckChange} /> Begin writing vows.<br />
        <input type="checkbox" name="check28" checked={this.state.check28} onChange={this.onCheckChange} /> Review ceremony details with officiant./Lay out the content for Wedding Programs. <br />
        <input type="checkbox" name="check29" checked={this.state.check29} onChange={this.onCheckChange} /> Finalize seating arrangements. <br />
        <input type="checkbox" name="check30" checked={this.state.check30} onChange={this.onCheckChange} /> Book spa and beauty treatments for you and your bridal&nbsp;party. <br />

        {/*1 months  */}

        <h1>1 MONTHS</h1>
        <h3>Don’t Forget</h3>
        <input type="checkbox" name="check31" checked={this.state.check31} onChange={this.onCheckChange} /> Call vendors to confirm date, times and location.<br />
        <input type="checkbox" name="check32" checked={this.state.check32} onChange={this.onCheckChange} /> Confirm honeymoon reservations.<br />
        <input type="checkbox" name="check33" checked={this.state.check33} onChange={this.onCheckChange} />Pack for honeymoon. <br />
        <input type="checkbox" name="check34" checked={this.state.check34} onChange={this.onCheckChange} /> Pick up wedding rings. <br />
        <input type="checkbox" name="check35" checked={this.state.check35} onChange={this.onCheckChange} /> Final dress fitting (with shoes &amp; undergarments).<br />


      </div>
    );

  }


}

export default WeddingCheckList;
