UI components its components that have 2+ variants in figma (exception components in figma which have 2 variants for desktop and mobile I created it only to don't make changes in every page if this component will change)


# Usage

### Ckeckbox
```tsx
  const [isChecked, setIsChecked] = useState(false) //example

      <Checkbox label="label" onChange={() => setIsChecked(isChecked => !isChecked)} isChecked={isChecked} />
      <p>{isChecked ? 'checked' : '!checked'}</p>
```


### RadioButton

```tsx
  const [label1, setLabel1] = useState('') //example
  const [label2, setLabel2] = useState('') //example

  <RadioButton label="label1" inputName="input-name1" onChange={e => setLabel1(e.target.value)} />
  <RadioButton label="label2" inputName="input-name1" onChange={e => setLabel1(e.target.value)} />
  <RadioButton label="label3" inputName="input-name2" onChange={e => setLabel2(e.target.value)} />
  <RadioButton label="label4" inputName="input-name2" onChange={e => setLabel2(e.target.value)} />

  <p>{label1 == 'label1' ? 'do stuff 1' : 'do stuff 2'}</p>
  <p>{label2}</p>
```

### Input
```tsx
  const [email, setEmail] = useState('') //example
  const [password, setPassword] = useState('') //example
  const [repeatPassword, setRepeatPassword] = useState('') //example
  
  <Input placeholder="Email" type='email' value={email} onChange={e => setEmail(e.target.value)} />
  <Input placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)} />
  <Input placeholder="Repeat password" type='password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
  <p>Email:{email}</p>
  <p>Pasword:{password}</p>
  <p>Repeat password:{repeatPassword}</p>

```

### Button
```tsx
  <Button variant='continue-with'>
    Continue with Google
    <AiOutlineGoogle className='text-secondary' size={42} />
  </Button>
  <Button variant='cta'>cta</Button>
  <Button variant='cta-danger'>cta-danger</Button>
  <Button variant='cta-success'>cta-success</Button>
  <Button variant='link'>link</Button>
  <Button variant='nav-link' active='active'>nav-link active</Button>
  <Button variant='nav-link' active='inactive'>nav-link inactive</Button>
```