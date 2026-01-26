

# Plan: Spanish Lead Form with Progressive Save

## Overview
Create a Spanish version of the lead submission form specifically for `/es/credito` with a **new flow** that captures contact info first, saves immediately, then progressively updates the same record with additional details.

---

## Database Changes Required

The current `funding_leads` table has many NOT NULL constraints that prevent partial saves. We need to make some fields nullable to support progressive saving:

**Migration needed:**
```sql
ALTER TABLE funding_leads 
  ALTER COLUMN funding_goal DROP NOT NULL,
  ALTER COLUMN applicant_type DROP NOT NULL,
  ALTER COLUMN yearly_revenue DROP NOT NULL,
  ALTER COLUMN credit_score DROP NOT NULL,
  ALTER COLUMN terms_accepted SET DEFAULT true;
```

This allows:
- Step 1: Save with just name, email, phone (basic lead capture)
- Steps 2+: Update the same record with additional fields

---

## New Component: SpanishLeadForm

Create `src/components/SpanishLeadForm.tsx` with the following structure:

### Step Flow

| Step | Fields | Action on "Next" |
|------|--------|------------------|
| **1. Contact Info** | Nombre, Apellido, Email, Teléfono | **INSERT** new lead to database |
| **2. Upsell Message** | Show incentive message + Service Selection (Reparación de Crédito / Obtener Financiamiento) | **UPDATE** with service_type |
| **3a. Credit Repair** | Credit Score, Credit Profile | **UPDATE** record |
| **3b. Get Funded** | Funding Goal, Applicant Type, Yearly Revenue | **UPDATE** record |
| **4b. Get Funded Credit** | Credit Score, Credit Profile | **UPDATE** record |

### All Text in Spanish

**Labels & Placeholders:**
- "Nombre" / "Juan"
- "Apellido" / "Pérez"  
- "Correo Electrónico" / "juan@ejemplo.com"
- "Teléfono" / "(555) 123-4567"

**Credit Score Options (Spanish):**
- "300-580" 
- "580-650"
- "650-710"
- "710-750"
- "750+"
- "No sé mi puntaje crediticio"

**Credit Profile Options (Spanish):**
- "Pagos atrasados en los últimos 2 años"
- "Pagos atrasados en los últimos 5 años"
- "Colecciones o cargos pendientes"
- "Bancarrota"
- "No tengo / Mi crédito está limpio"

**Service Type Options (Spanish):**
- "Reparación de Crédito - Mejorar mi puntaje"
- "Obtener Financiamiento - Necesito capital"

**Revenue Options (Spanish):**
- "$0 - $25,000"
- "$25,000 - $50,000"
- "$50,000 - $100,000"
- "$100,000 - $250,000"
- "$250,000+"

**Button Text:**
- "Siguiente" (Next)
- "Atrás" (Back)
- "Enviar" (Submit)
- "Enviando..." (Submitting)

### Upsell Message (Step 2)

After contact info is saved, show:
> **"¡Gracias! Tu información ha sido guardada."**
>
> **¿Quieres una respuesta más rápida?**
>
> Completa estos datos adicionales y te contactamos en menos de 48 horas con opciones personalizadas.

Then show service type selection.

### Progressive Save Logic

```typescript
// Step 1 completion: INSERT
const { data, error } = await supabase
  .from("funding_leads")
  .insert({
    first_name,
    last_name,
    email,
    phone,
    terms_accepted: true,
    service_type: null,
    credit_score: null,
    // other nullable fields...
  })
  .select()
  .single();

// Save the lead ID for updates
setLeadId(data.id);

// Subsequent steps: UPDATE using the saved ID
const { error } = await supabase
  .from("funding_leads")
  .update({ service_type, credit_score, credit_profile })
  .eq("id", leadId);
```

### Success Screen (Spanish)

> **"¡Solicitud Enviada!"**
>
> Gracias por tu solicitud. Nuestro equipo la revisará y te contactará en 24-48 horas.
>
> [Volver al Inicio]

---

## Integration with EsCredito.tsx

Replace the current `LeadSubmissionForm` import with `SpanishLeadForm`:

```tsx
import SpanishLeadForm from "@/components/SpanishLeadForm";

// In the form section:
<SpanishLeadForm />
```

---

## Files to Create/Modify

1. **Database migration** - Make fields nullable for progressive save
2. **Create `src/components/SpanishLeadForm.tsx`** - New Spanish form component
3. **Update `src/pages/EsCredito.tsx`** - Import and use the Spanish form

---

## Technical Notes

- The form tracks `leadId` in state after initial insert
- Uses `update` with `eq("id", leadId)` for subsequent steps
- If user abandons after Step 1, you still have their contact info (valuable for follow-up)
- All validation messages in Spanish
- Maintains the same styling as the original form (Card, Progress bar, etc.)

