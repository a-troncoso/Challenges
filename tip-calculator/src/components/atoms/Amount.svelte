<div class="amount">
  <div class="amount__label">
    <span class="amount__primary-label">Tip Amount</span>
    <span class="amount__secondary-label">/ person</span>
  </div>
  <div class="amount__value">$4.07</div>
</div>

<style>
  .amount {
    display: flex;
    justify-content: space-between;
    align-items: end;
    color: #fff;
    font-weight: bold;
  }
  .amount__label {
    display: flex;
    flex-direction: column;
  }

  .amount__primary-label {
    font-size: 14px;
    line-height: 24px;
  }

  .amount__secondary-label {
    font-size: 12px;
    color: var(--tertiary);
  }
  
  .amount__value {
    font-size: 40px;
    color: var(--secondary);
  }
</style>
