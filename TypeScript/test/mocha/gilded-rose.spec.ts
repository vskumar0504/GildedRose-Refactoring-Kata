import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });


  it('should execute else clause', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Aged Brie');    
  });

  it('Test for: "Backstage passes to a TAFKAL80ETC concert" text', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');    
  });  
});
