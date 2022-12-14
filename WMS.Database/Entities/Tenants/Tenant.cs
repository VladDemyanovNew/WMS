namespace WMS.Database.Entities.Tenants;

using WMS.Database.Enums;

public class Tenant : BaseEntity
{
    public TenantType Type { get; set; }

    public string Phone { get; set; } = default!;

    public string Address { get; set; } = default!;

    public ICollection<Ware> Wares { get; } = new HashSet<Ware>();
}
