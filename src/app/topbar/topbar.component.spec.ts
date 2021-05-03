import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarComponent ],
      imports: [MatDialogModule],
      providers: [MatDialog]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar span').textContent).toContain('Punky');
  });

  it('on click menu, event should trigger', () => {
    spyOn(component.clickMenuEvent, 'emit');
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.menu')).nativeElement.click();
    expect(component.clickMenuEvent.emit).toHaveBeenCalled();
  });

  it('on click help, dialog should open', () => {
    spyOn(component.dialog, 'open');
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.help')).nativeElement.click();
    expect(component.dialog.open).toHaveBeenCalled();
  });
});
