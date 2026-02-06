var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "angle-sum-apps",
  "level": "1",
  "url": "angle-sum-apps.html",
  "type": "Section",
  "number": "",
  "title": "Applications of the Angle Sum Identities",
  "body": " Applications of the Angle Sum Identities  In class yesterday we did an activity to derive the first of the identities in the following:  The Angle Sum Identities  If and are angles, then we have   Now we will use these identities for some problems that come up in later applied math courses.   Sums of Sinusoids with the Same Period  In the mathematical description of oscillating objects, one frequently encounters functions of the form where and are constants. This is a periodic function with period , but we would like to know its amplitude too. To do so, we can write it in the form for some constants and . To see how, let's do an example.    Let . To write in the form , we expand the given form using the angle sum identity for sine. Equating coefficients of and , we have Thus, Then we can take . Also, So, we . Hence,      Writing as a Single Sine  To write, in the form proceed as follows:   Expand using the angle sum identity for sine.     Match coefficients to get     Notice that , so .    Notice that . Based on the signs of and , decide which quadrant can be in, and use or .        Sum to Product Identities and Applications  Some identities related to the angle sum identities are the following:  Sum to Product Identities  If and are angles, then we have     One use of these is to solve equations like in the following example.    Suppose we want to solve We apply the third identity given above to re-write the equation as This is a factored form, so we can set and equal to zero separately on the given domain to obtain       One really neat application of a sum-to product formula comes when you write a sum of two sinuoidal functions with very close periods as a product. For instance, The factor has a very short period while has a very long period. The result is a graph that looks like the following:    f(x)=sin(2*x)+sin(2.1*x)          What's really neat is that this allows you to hear this identity at work. This is what causes the wavering sound at the end of this video.   MIT Beats and Resonance       "
},
{
  "id": "single-sinusoid-3",
  "level": "2",
  "url": "angle-sum-apps.html#single-sinusoid-3",
  "type": "Example",
  "number": "1",
  "title": "",
  "body": "  Let . To write in the form , we expand the given form using the angle sum identity for sine. Equating coefficients of and , we have Thus, Then we can take . Also, So, we . Hence,    "
},
{
  "id": "sum-to-product-4",
  "level": "2",
  "url": "angle-sum-apps.html#sum-to-product-4",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": "  Suppose we want to solve We apply the third identity given above to re-write the equation as This is a factored form, so we can set and equal to zero separately on the given domain to obtain    "
},
{
  "id": "sum-to-product-5",
  "level": "2",
  "url": "angle-sum-apps.html#sum-to-product-5",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  One really neat application of a sum-to product formula comes when you write a sum of two sinuoidal functions with very close periods as a product. For instance, The factor has a very short period while has a very long period. The result is a graph that looks like the following:    f(x)=sin(2*x)+sin(2.1*x)          What's really neat is that this allows you to hear this identity at work. This is what causes the wavering sound at the end of this video.   MIT Beats and Resonance     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
