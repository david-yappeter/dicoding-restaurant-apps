const itActsAsFavouriteRestaurantModel = (favouriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favouriteRestaurant.put({ id: 1 });
    favouriteRestaurant.put({ id: 2 });

    expect(await favouriteRestaurant.get(1)).toEqual({ id: 1 });
    expect(await favouriteRestaurant.get(2)).toEqual({ id: 2 });
    expect(await favouriteRestaurant.get(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favouriteRestaurant.put({ aProperty: 'property' });

    expect(await favouriteRestaurant.getAll()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favouriteRestaurant.put({ id: 1 });
    favouriteRestaurant.put({ id: 2 });

    expect(await favouriteRestaurant.getAll()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favouriteRestaurant.put({ id: 1 });
    favouriteRestaurant.put({ id: 2 });
    favouriteRestaurant.put({ id: 3 });

    await favouriteRestaurant.delete(1);

    expect(await favouriteRestaurant.getAll()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favouriteRestaurant.put({ id: 1 });
    favouriteRestaurant.put({ id: 2 });
    favouriteRestaurant.put({ id: 3 });

    await favouriteRestaurant.delete(4);

    expect(await favouriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export { itActsAsFavouriteRestaurantModel };
