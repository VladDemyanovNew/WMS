﻿namespace WMS.Database.Entities.Addresses;

public class Shelf : BaseEntity
{
    public int VerticalSectionId { get; set; }

    public VerticalSection VerticalSection { get; set; } = default!;
}