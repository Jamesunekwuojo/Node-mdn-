def calculate_F(x):
  """Calculates x^2 + 0.16"""
  return x * x + 0.16

# Initial guess
x = 0.1

# Loop to repeat the calculation
for _ in range(11):
  N = calculate_F(x)
  print(N)
  x = N





