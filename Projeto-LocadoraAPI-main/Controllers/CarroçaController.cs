namespace LocadoraAPI.Controllers;
using LocadoraAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("[controller]")]
public class CarroçaController : ControllerBase
{
    private LocadoraDbContext _context;

    public CarroçaController(LocadoraDbContext context)
    {
        _context = context;
    }

    [HttpPost()]
    [Route("cadastrar")]
    public async Task<IActionResult> Cadastrar (Carroça carroça)
    {
        await _context.AddAsync(carroça);
        await _context.SaveChangesAsync();
        return Created("",carroça);
    }

    [HttpGet()]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Carroça>>> Listar()
    {
        if(_context.Carroça is null)
            return NotFound();
        return await _context.Carroça.ToListAsync();
    }


    [HttpGet()]
    [Route("buscar/{placa}")]
    public async Task<ActionResult<Carroça>> Buscar (string placa)
    {
        if(_context.Carroça is null)
            return NotFound();
            var carroça = await _context.Carroça.FindAsync(placa);
        return Ok(carroça);
    }



    [HttpPut]
    [Route("alterar")]
    public async Task<ActionResult> Alterar(Carroça carroça)
    {
        _context.Carroça.Update(carroça);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch]
    [Route("modificarCavalos/{placa}")]
    public async Task<IActionResult> ModificarCavalo(string placa, [FromForm] int cavalos)
    {
        var carroça = await _context.Carroça.FindAsync(placa);
        if (carroça is null) return NotFound();
        carroça.Cavalos = cavalos;
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete]
    [Route("excluir/{placa}")]
    public async Task<IActionResult> Excluir(string placa){
        var carroça = await _context.Carroça.FindAsync(placa);
        if(carroça is null) return NotFound();
         _context.Carroça.Remove(carroça);
        await _context.SaveChangesAsync();
        return Ok();
    }

}