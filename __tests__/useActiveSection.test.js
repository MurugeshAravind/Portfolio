import { renderHook, act } from '@testing-library/react';
import { useActiveSection } from '../app/hooks/useActiveSection';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('useActiveSection', () => {
  let observeMock;
  let disconnectMock;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();
    global.IntersectionObserver = vi.fn(function() {
      this.observe = observeMock;
      this.disconnect = disconnectMock;
    });
    
    // Mock getElementById
    vi.spyOn(document, 'getElementById').mockImplementation((id) => {
      const el = document.createElement('section');
      el.id = id;
      return el;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes with the first section ID', () => {
    const { result } = renderHook(() => useActiveSection(['about', 'experience']));
    expect(result.current).toBe('about');
  });

  it('observes all provided sections', () => {
    renderHook(() => useActiveSection(['about', 'experience']));
    expect(observeMock).toHaveBeenCalledTimes(2);
  });

  it('disconnects observer on unmount', () => {
    const { unmount } = renderHook(() => useActiveSection(['about']));
    unmount();
    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });

  it('updates active section when intersecting', () => {
    let callback;
    global.IntersectionObserver = vi.fn(function(cb) {
      callback = cb;
      this.observe = observeMock;
      this.disconnect = disconnectMock;
    });

    const { result } = renderHook(() => useActiveSection(['about', 'experience']));
    
    act(() => {
      callback([{ isIntersecting: true, target: { id: 'experience' } }]);
    });
    
    expect(result.current).toBe('experience');
  });
});
