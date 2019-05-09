const requestQuickDraw = require('../helpers/requestGuess');

const mockMessage = {
  draw: {input_type:0,requests:[{language:'quickdraw',writing_guide:{width:1280,height:158},ink:[[[533,533,533,535,537,539,543,550,552,557,561,581,582,582,582,583,583,630,642,646,648,649,650],[33,33,35,40,44,45,50,59,62,68,72,87,87,87,87,86,85,59,51,48,47,46,46],[0,258.2750000001397,266.05999999446794,290.05499999038875,306.2950000021374,314.0949999942677,330.13000000210013,354.03499999665655,362.0399999927031,378.019999989192,394.029999995837,530.0199999910546,554.0649999893503,570.0299999880372,586.0149999934947,610.0599999917904,626.0550000006333,706.0149999888381,730.3499999979977,746.1349999939557,762.2750000009546,778.3149999886518,786.3749999960419]]]}]}
}

// const mockMessageFakeTime = {
//   draw: {input_type:0,requests:[{
//     language:'quickdraw',
//     writing_guide:{
//       width:1280,
//       height:158
//     },
//     ink:[[
//       [533,533,533,535,537,539,543,550,552,557,561,581,582,582,582,583,583,630,642,646,648,649,650],
//       [33,33,35,40,44,45,50,59,62,68,72,87,87,87,87,86,85,59,51,48,47,46,46],
//       [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
//     ]]
//   }]
// }
// }
// const fakeSocket = {type: 'draw'};

describe('Get QuickDraw responses', () => {
  it('should return the best guess string', async () => {
    const result = await requestQuickDraw(mockMessage);
    expect(result).toEqual('elbow');
  });

  // it('should return the best guess string without timestamp', async () => {
  //   const result = await requestQuickDraw(fakeSocket, mockMessageFakeTime);
  //   expect(result).toEqual('elbow');
  // });

});
