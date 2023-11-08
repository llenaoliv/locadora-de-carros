using System.ComponentModel.DataAnnotations; 

namespace LocadoraAPI.Models;

public class Carroça : Veiculo
{
   public int? Cavalos {get; set;}
}