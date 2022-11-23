import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAlbumComponent } from './section-album.component';

describe('SectionAlbumComponent', () => {
  let component: SectionAlbumComponent;
  let fixture: ComponentFixture<SectionAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
