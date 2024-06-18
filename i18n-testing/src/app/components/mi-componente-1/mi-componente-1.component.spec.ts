import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponente1Component } from './mi-componente-1.component';
import { By } from '@angular/platform-browser';

describe('MiComponente1Component', () => {
  let component: MiComponente1Component;
  let fixture: ComponentFixture<MiComponente1Component>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiComponente1Component);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("deberia existir una variable en el componente que tuviese valor 'apagado' de primeras",()=>{
    expect(component.estado).toBe("apagado")
  })

  it("deberia cambiar estado de apagado a encendido si se ejecuta la funcion", ()=>{
    component.cambiarEstado()
    expect(component.estado).toBe("encendido")
  })

  it("deberia cambiar el estado de apagado a encendido si se ejecuta la funcion y de encendido a apagado si se vuelve a ejecutar",()=>{
    component.cambiarEstado()
    expect(component.estado).toBe("encendido")
    component.cambiarEstado()
    expect(component.estado).toBe("apagado")
  })

  it("deberia haber un boton que tenga de nombre 'interruptor'",()=>{
    const boton = compiled.querySelector('button')
    expect(boton).toBeTruthy()
    expect(boton?.textContent).toBe("interruptor")
  })

  it("deberia mostrar un titulo h1 con texto 'apagado' al principio",()=>{
    const h1 = compiled.querySelector('h1')
    expect(h1).toBeTruthy()
    expect(h1?.textContent).toBe("apagado")
  })

  it("deberia cambiar el h1 a 'encendio' si pulso el boton interruptor",()=>{
    // apagado
    const boton = fixture.debugElement.query(By.css("button"))
    boton?.triggerEventHandler('click')

    // apagado
    fixture.detectChanges()
    // enciendido

    const h1 = compiled.querySelector('h1')
    expect(h1?.textContent).toBe("encendido")

    // encendido
    boton?.triggerEventHandler('click')
    boton?.triggerEventHandler('click')
    boton?.triggerEventHandler('click')

    // encendido


    fixture.detectChanges()

    expect(h1?.textContent).toBe("apagado")


  })
});
