import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('rend le label', () => {
    render(<Button>Enregistrer</Button>);
    expect(screen.getByRole('button', { name: 'Enregistrer' })).toBeInTheDocument();
  });

  it('appelle onClick quand cliqué', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Cliquer</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('est désactivé quand loading=true', () => {
    render(<Button loading>Enregistrer</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('respecte la variante destructive', () => {
    render(<Button variant="destructive">Supprimer</Button>);
    expect(screen.getByRole('button')).toHaveClass('wc-button--destructive');
  });

  it('peut être atteint au clavier', async () => {
    render(<Button>Focus</Button>);
    await userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });
});
